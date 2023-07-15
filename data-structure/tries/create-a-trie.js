let ALPHABET_SIZE = 26;

class TrieNode {
    constructor(data) {
      this.isEndOfWord = false;   
      this.vlaue = data;
      this.children = new Array(ALPHABET_SIZE);
    }
}

class Tries{
    constructor() {
        this.root = new TrieNode(null);
      }

    insert(key) {
     let pCrawl = this.root;
     let data = key.split('');
     for (let ch of data) {
        let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!pCrawl.children[index]) {
            pCrawl.children[index] = new TrieNode(ch);
        }
        pCrawl = pCrawl.children[index];
     }

     // mark last node as leaf
     pCrawl.isEndOfWord = true;
    }

    search(key) {
        let pCrawl = this.root;
        let data = key.split('');
        for (let ch of data) {
           let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
           if (!pCrawl.children[index]) {
               return false;
           }
           pCrawl = pCrawl.children[index];
        }
   
        return pCrawl.isEndOfWord;
   }
}

let tries = new Tries();

// Driver   
// Input keys (use only 'a' through 'z' and lower case)
let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their"];
let output = ["Not present in trie", "Present in trie"];

for (let word of keys) {
     tries.insert(word);
}
console.log(tries.search("an") ? output[1] : output[0]);      // Not present in trie
console.log(tries.search("answer") ? output[1] : output[0]);  // Present in trie

