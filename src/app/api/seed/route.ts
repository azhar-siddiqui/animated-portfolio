import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Check if admin user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        isAdmin: true
      }
    })

    return NextResponse.json({ 
      message: 'Admin user created successfully',
      user: { id: user.id, email: user.email }
    })

  } catch (error) {
    console.error('Error creating admin user:', error)
    return NextResponse.json({ error: 'Failed to create admin user' }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Create default admin user if none exists
    const existingUsers = await prisma.user.count()
    
    if (existingUsers === 0) {
      const hashedPassword = await hashPassword(process.env.ADMIN_PASSWORD || 'admin123')
      
      const user = await prisma.user.create({
        data: {
          email: process.env.ADMIN_EMAIL || 'admin@portfolio.com',
          password: hashedPassword,
          isAdmin: true
        }
      })

      return NextResponse.json({ 
        message: 'Default admin user created',
        email: user.email
      })
    }

    return NextResponse.json({ message: 'Admin user already exists' })

  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 })
  }
}
