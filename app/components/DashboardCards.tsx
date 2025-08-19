'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardCards({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}