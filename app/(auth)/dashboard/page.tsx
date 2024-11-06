import { Metadata } from 'next'
import Dashboard from '@/components/dashboard/Dashboard'

export const metadata: Metadata = {
  title: 'Dashboard - Stock Analysis Platform',
  description: 'View your stock analysis strategies and performance',
}

export default function DashboardPage() {
  return (
    <main>
      <Dashboard />
    </main>
  )
}