# Reversing a linked list
- prev starts as null, At end becomes head of the linked list.
- After reversing prev points to last node.

# Slow and fast pointer
- Used to detect cycle
- To find middle

# DummyNode: Finding Nth node from end
- create dummy node pointing to head
- left pointer to dummy
- right pointer at head
- Only move right to next until gap b/w left and right is n.
- Now move both right and left to next until right reaches the end.
- Now, right will point to null, and left.next is our node to remove.
- left.next = left.next.next. Delete the nth node
- now return dummy.next

# Floyd's Cycle Detection