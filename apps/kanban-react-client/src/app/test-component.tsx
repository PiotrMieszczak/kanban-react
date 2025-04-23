import React from 'react';
import { Button } from '@kanban-react/ui';

export function TestComponent() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Tailwind Test Component</h1>
      <div className="space-y-4">
        <p className="text-blue-500">This text should be blue if Tailwind is working</p>
        
        <div className="space-x-2">
          <Button>Default Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
        
        <div className="space-x-2">
          <Button size="sm">Small Button</Button>
          <Button>Default Size</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>
    </div>
  );
}
