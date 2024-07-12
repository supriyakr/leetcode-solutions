import Node from "./Node";
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    // create a new node
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      // start from the head
      let currentNode = this.head;
      //traverse the chain until next node is null
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  remove(value) {
    if (this.head == null) {
      return;
    }
    if (this.head == value) {
      this.head = this.head.next;
      return;
    }
    //start from the head
    let current = this.head;
    while (current.next !== null && current.next.value == value) {
      current = current.next;
    }
    if (current.next != null) {
      current.next = current.next.next;
    }
  }


  print()
  {
    let current= this.head;
    while(current.next!==null)
        {
            console.log(current.value);
            current=current.next;
        }
    }

    contains(value)
    {
        if (this.head == null) {
            return;
          }
          if (this.head == value) {
            return true;
          }
          let current= this.head;
         while(current!=null)
            { 
                if(current.value==value)
                    {
                        return true;
                    }
                
                current=current.next;
            }
            return false;

    }

    sizeOf()
    {
        let size=0;
        if(this.head==null)
            {
                return size;
            }
            else
            {
                let current= this.head;
                while(current!=null)
                    {
                        size++;
                        current=current.next;
                    }
                    return size;
            }

    }

}
