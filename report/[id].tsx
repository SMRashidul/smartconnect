'use client';
export default function ReportViewer({ params }: { params: { id: string } }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Report Viewer (Placeholder)</h1>
      <p>Dynamic report for ID: {params.id}</p>
    </div>
  );
}