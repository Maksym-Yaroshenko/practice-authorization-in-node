class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
  }

  add(value) {
    if (value > this.value) {
      this.addRight(value);
    } else {
      this.addLeft(value);
    }
  }

  addRight(value) {
    if (this.right) {
      return this.right.add(value);
    }
    this.right = new TreeNode(value);
  }
  addLeft(value) {
    if (this.left) {
      return this.left.add(value);
    }
    this.left = new TreeNode(value);
  }
}

class BinaryTree {
  constructor() {
    this.root = undefined;
  }

  add(value) {
    if (this.root) {
      return this.root.add(value);
    }

    this.root = new TreeNode(value);
  }
}

const tree = new BinaryTree();
tree.add(23);
tree.add(53);
tree.add(126);
tree.add(12);
tree.add(34);
tree.add(5);
tree.add(15);

// console.log(JSON.stringify(tree, null, '  '));

function noAsyncFunction(name = 'unknown') {
  return `Hello, ${name}`;
}

async function asyncFunction(name = 'unknown') {
  try {
    const promiceValue = await new Promise((resolve, reject) => {
      setTimeout(() => reject(12), 2000);
    });
    console.log('GOOD!', promiceValue);
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();

// console.log(noAsyncFunction());
