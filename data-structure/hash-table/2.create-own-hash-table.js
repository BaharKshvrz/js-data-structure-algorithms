class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    get( key ) {
       let address = this._hash(key);
       let currentBucket = this.data[address];

       if (currentBucket.length) {
         for (let i= 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
                return currentBucket[i][1];
            }
         }
       }

       return undefined;
    } // O(1): best case    O(n): worst case

    set( key, value ) {
        let address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        
        return this.data;
    } // O(1)

    keys() {
        let keysArr = [];
        for(let i= 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length) {
                    for (let j= 0; j < this.data[i].length; j++) {
                      keysArr.push(this.data[i][j][0]);
                    }
               } else {
                keysArr.push(this.data[i][0]);
               }
            }
        }

        return keysArr;
    }


    _hash( key ) {
       // select a place for data 
       let hash = 0;
       for (let i= 0; i < key?.length; i++) {
         hash = (hash + key.charCodeAt(i) * i) % this.data.length;
       }
       return hash;
    }
}

let hashTbl = new HashTable(50);
hashTbl.set('a', 1000);
hashTbl.set('a', 101);
hashTbl.set('b', 10);
hashTbl.set('c', 150);
hashTbl.set('d', 77);
hashTbl.set('e', 99);
hashTbl.set('f', 25);
hashTbl.set('ab', 650);
hashTbl.set('abc', 1000);
hashTbl.set(null, null);
hashTbl.set(null, 50);
hashTbl.set('bb', null);
console.log("main data:", hashTbl.data);
/*
main data: [
  [
    [ 'a', 1000 ],
    [ 'a', 101 ],
    [ 'b', 10 ],
    [ 'c', 150 ],
    [ 'd', 77 ],
    [ 'e', 99 ],
    [ 'f', 25 ],
    [ null, null ],
    [ null, 50 ]
  ],
  <45 empty items>,
  [ [ 'abc', 1000 ] ],
  <1 empty item>,
  [ [ 'ab', 650 ], [ 'bb', null ] ],
  <1 empty item>
]
*/




// console.log(hashTbl.get('a'));
// console.log(hashTbl.get('b'));

console.log("data keys:", hashTbl.keys());
