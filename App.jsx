import React, { useState } from 'react';
import { Button, Card, Modal } from './index';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: '2em', fontFamily: 'sans-serif' }}>
      <h1>My UI Library Demo</h1>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Card title="Sample Card">
        This is a simple card component. You can put any content here.
      </Card>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal. Click outside or the &times; to close.</p>
      </Modal>
    </div>
  );
}

export default App; 