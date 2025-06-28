# my-ui-library

A simple, reusable React component library featuring Button, Card, and Modal components. Perfect for rapid prototyping and consistent UI in your React projects.

---

## 📦 Installation

1. **Clone or download this repository**, or install via npm (if published):

```sh
npm install my-ui-library
```

2. **Install peer dependencies** in your project if you haven't already:

```sh
npm install react react-dom
```

---

## 🚀 Usage

Import the components you need in your React app:

```jsx
import { Button, Card, Modal } from 'my-ui-library';

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Card title="Card Title">Card content goes here.</Card>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        Modal content
      </Modal>
    </div>
  );
}
```

---

## 🛠️ Development

To run the demo app locally and see the components in action:

```sh
npm install
npm run start
```

This will start a development server at [http://localhost:8080](http://localhost:8080).

---

## 📚 Components

### Button
- **Props:** `onClick`, `type`, `className`, `children`
- **Usage:**
  ```jsx
  <Button onClick={handleClick}>Click Me</Button>
  ```

### Card
- **Props:** `title`, `className`, `children`
- **Usage:**
  ```jsx
  <Card title="My Card">Card content here.</Card>
  ```

### Modal
- **Props:** `open`, `onClose`, `className`, `children`
- **Usage:**
  ```jsx
  <Modal open={modalOpen} onClose={closeModal}>Modal content</Modal>
  ```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or enhancements.

---

## 📄 License

MIT 