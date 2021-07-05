import { v4 as uuidv4 } from 'uuid';

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	clone() {
		var temp = JSON.stringify(this);
		return JSON.parse(temp);
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	add(data, parentNode = null) {
		var node = new Node(data);
		if (parentNode) {
			parentNode.children.push(node);
		}
		else {
			if (!this.root) {
				this.root = node;
			}
			else {
				this.root.children.push(node);
			}
		}
	};

	remove(data) {
		if (this.root.data === data) {
			this.root = null;
		}

		var queue = [this.root];
		while (queue.length) {
			var node = queue.shift();
			for (var i = 0; i < node.children.length; i++) {
				if (node.children[i].data === data) {
					node.children.splice(i, 1);
				}
				else {
					queue.push(node.children[i]);
				}
			}
		}
	};

	contains(data) {
		return this.findBFS(n => n.data === data) ? true : false;
	};

	findBFS(fn) {
		var queue = [this.root];
		while (queue.length) {
			var node = queue.shift();
			if (fn && fn(node)) {
				return node;
			}
			for (var i = 0; i < node.children.length; i++) {
				queue.push(node.children[i]);
			}
		}
		return null;
	};

	_preOrder(node, fn) {
		if (node) {
			if (fn) {
				fn(node);
			}
			for (var i = 0; i < node.children.length; i++) {
				this._preOrder(node.children[i], fn);
			}
		}
	};

	_postOrder(node, fn) {
		if (node) {
			for (var i = 0; i < node.children.length; i++) {
				this._postOrder(node.children[i], fn);
			}
			if (fn) {
				fn(node);
			}
		}
	};

	traverseDFS(fn, method) {
		var current = this.root;
		if (method) {
			this['_' + method](current, fn);
		}
		else {
			this._preOrder(current, fn);
		}
	};

	traverseBFS(fn) {
		var queue = [this.root];
		while (queue.length) {
			var node = queue.shift();
			if (fn) {
				fn(node);
			}
			for (var i = 0; i < node.children.length; i++) {
				queue.push(node.children[i]);
			}
		}
	};

	prettyPrint() {
		this.traverseBFS(function (n) {
			if (n.data?.metadata !== null) {
				console.log(n.data.metadata.title);
			}
		});
	}
}

export class VirtualFileSystem {
	constructor() {
		this.tree = new Tree();
		this.addFile(new VirtualFile(
			{
				type: 'ROOT',
				title: 'ROOT'
			},
			null
		));
	}

	getFiles() {
		return this.tree.root.children;
	}

	getFileNode(uuid) {
		return this.tree.findBFS(n => n.data?.uuid === uuid);
	}

	getFile(uuid) {
		return this.getFileNode(uuid).data;
	}

	containsFile(file) {
		return this.tree.contains(file);
	}

	addFile(file, parentUuid = null) {
		if (parentUuid) {
			return this.tree.add(file, this.getFileNode(parentUuid));
		}
		else {
			return this.tree.add(file);
		}
	}

	setFile(file) {
		var node = this.tree.findBFS(n => n.data?.uuid === file.uuid);
		if (node) {
			node.data = file;
		}
		else console.log("Cannot find node with file uuid: " + file.uuid);
	}

	deleteFile(file) {
		return this.tree.remove(file);
	}

	print() {
		console.log("FileSystem:\n" + JSON.stringify(this.tree, null, 2));
	};

	prettyPrint() {
		this.tree.prettyPrint();
	}
}

export class VirtualFile {
	constructor(metadata, content, uuid = null) {
		this.uuid = uuid === null ? uuidv4() : uuid;
		this.metadata = metadata;
		this.content = content;
	}
}