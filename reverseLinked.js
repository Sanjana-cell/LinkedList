var head;
class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
function reverse(head) {
    if (head == null || head.next == null)
        return head;
    var rest = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}

function print(){
    var ptr = head;
    while(ptr != null){
        console.log(ptr.data + " ");
        ptr = ptr.next;
    }
    console.log("")
}

function push(data){
    var temp = new Node(data);
    temp.next = head;
    head = temp;
}

push(10);
push(4);
push(7);
head = reverse(head);
print()