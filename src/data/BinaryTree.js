// src/data/BinaryTree.js
class TreeNode {
    constructor(book) {
      this.book = book;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(book) {
      const newNode = new TreeNode(book);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.book.price < node.book.price) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    find(bookTitle) {
      return this.search(this.root, bookTitle);
    }
  
    search(node, bookTitle) {
      if (node === null) return null;
      if (node.book.title === bookTitle) return node.book;
      if (bookTitle < node.book.title) return this.search(node.left, bookTitle);
      return this.search(node.right, bookTitle);
    }
  
    delete(bookTitle) {
      this.root = this.removeNode(this.root, bookTitle);
    }
  
    removeNode(node, bookTitle) {
      if (node === null) return null;
      if (bookTitle < node.book.title) {
        node.left = this.removeNode(node.left, bookTitle);
        return node;
      } else if (bookTitle > node.book.title) {
        node.right = this.removeNode(node.right, bookTitle);
        return node;
      } else {
        // Node with only one child or no child
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
  
        // Node with two children
        const minRight = this.findMinNode(node.right);
        node.book = minRight.book;
        node.right = this.removeNode(node.right, minRight.book.title);
        return node;
      }
    }
  
    findMinNode(node) {
      while (node.left !== null) node = node.left;
      return node;
    }
  }
  
  export default BinaryTree;
  