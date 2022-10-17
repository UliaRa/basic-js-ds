const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    let rootTree = this.rootTree;
    return rootTree;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootTree = addNode(this.rootTree, data);

    function addNode(parentNode, data) {
      if (!parentNode) {
        return new Node(data);
      }
      else if (parentNode.data === data) {
        return parentNode;
      }
      if (data < parentNode.data) {
        parentNode.left = addNode(parentNode.left, data);
      } else {
        parentNode.right = addNode(parentNode.right, data);
      }
      return parentNode;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    return searchNode(this.rootTree, data);

    function searchNode(parentNode, data) {
      if (!parentNode) {
        return false;
      }
      if (parentNode.data === data) {
        return true;
      }
      if (data < parentNode.data) {
        return searchNode(parentNode.left, data);
      } else {
        return searchNode(parentNode.right, data)
      }
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    return findNode(this.rootTree, data);

    function findNode(parentNode, data) {
      if (parentNode == null) {
        return null;
      }
      else if (parentNode.data === data) {
        return parentNode;
      }
      else if (data < parentNode.data) {
        return findNode(parentNode.left, data);
      } else {
        return findNode(parentNode.right, data)
      }
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(parentNode, data) {
      if (!parentNode) {
        return null;
      }

      if (data > parentNode.data) {
        parentNode.right = removeNode(parentNode.right, data);
        return parentNode;
      } else if (parentNode.data > data) {
        parentNode.left = removeNode(parentNode.left, data);
        return parentNode;
      } else {
        if (!parentNode.left && !parentNode.right) {
          return null;
        } 
        if (!parentNode.left) {
          parentNode = parentNode.right;
          return parentNode;
        }
         if (!parentNode.right) {
          parentNode = parentNode.left;
          return parentNode;
        }

          let minRight = parentNode.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          parentNode.data = minRight.data;
          parentNode.right = removeNode(parentNode.right, minRight.data);
          return parentNode;
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    if (!this.rootTree) {
      return;
    }

    let res = this.rootTree;
    while (res.left) {
      res = res.left;
    }
    return res.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    if (!this.rootTree) {
      return;
    }

    let res = this.rootTree;
    while (res.right) {
      res = res.right;
    }
    return res.data;
  }
}

module.exports = {
  BinarySearchTree
};