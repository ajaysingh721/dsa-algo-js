class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


class BST {
    constructor(root = null) {
        this.root = root
    }

    add(val) {
        const newNode = new TreeNode(val)
        if (!this.root) {
            this.root = newNode
            return
        }


        let curr = this.root

        while (curr) {
            if (val > curr.val) {
                if (!curr.right) {
                    curr.right = new TreeNode(val)
                    return
                }
                curr = curr.right
            }
            else if (val < curr.val) {
                if (!curr.left) {
                    curr.left = new TreeNode(val)
                    return
                }
                curr = curr.left
            }
            else {
                curr.val = val
            }
        }
    }

    inorderTraversal() {
        const res = []
        inorderTraversalHelper(this.root, res)
        console.log(res);

    }

    preorderTraversal() {
        const res = []
        preroderTraversalHelper(this.root, res)
        console.log(res);

    }
}

const inorderTraversalHelper = (root, res = []) => {
    if (!root)
        return


    inorderTraversalHelper(root.left, res)
    const curr = root
    res.push(root.val)
    inorderTraversalHelper(root.right, res)
}

const preroderTraversalHelper = (root, res = []) => {
    if (!root)
        return
    res.push(root.val)
    preroderTraversalHelper(root.left, res)
    preroderTraversalHelper(root.right, res)
}

// Test BST

const tree = new BST()

tree.add(3)
tree.add(2)
tree.add(5)
tree.add(4)

tree.inorderTraversal()
tree.preorderTraversal()