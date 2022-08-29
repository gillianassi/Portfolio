 # Lock Free Ordened List
<br>
 <b>!! Work in progress !!</b> <br>
 <br>


 ## What type of list am I using and why?
 
 I decided to go for an ordered linked list for the following reasons: <br>
 1) I was able to find documentation surrounding this subject <br>
 2) while inserting and deleting values in an ordered linked list using multiple threads, 
    especially the pNext of the left node needs to be atomically changed. <br>
 <br>
 
 ## What will be the Problem if I simply use CAS? [ ABA problem ]
 
 If you delete and insert at the same time in the same location, you might make an invalid list,
 where a node is inserted and has no other node pointing at them!!(dangling node)
 Which means it can never be found again
 <br>
 
 ## What is the solution to this problem?
 
 Instead of instantly deleting nodes, first mark them for delete (logically delete them)
 This is done by tagging the LSB of the next pointer of that node
 Only after the node has been marked for delete, the "search" function will clean the list
 by physically deleting all marked nodes.
 <br> <br>
 
 ## How does pointer tagging work?

 Pointers are always aligned.  
 "in 64-bit architecture, a word is 64 bits = 8 bytes, so word-aligned addresses end in 000, leaving the last 3 bits available"
 This means that the 3 LSB are taggable
 I will simply tag the LSB (which makes it also suitable for 32 bit-architecture, that has 2 bits available)
 We set the least significant bit of the pointer to mark a node for deletion
 This is called a logical delete (following the paper following paper https://timharris.uk/papers/2001-disc.pdf "
 Afterwards, using the search function, the tagged values will be cleaned up.
 <br> <br>
 
 ## Why use pointer tags in this situation?
 
 We want to mark a node for delete (logically delete), while using CAS to keep it lock-free.
 if we would use a separate variable, new ABA problems could be introduced
 By using CAS, a thread will try to change the value of pNext to the tagged version in a lock-free manner
 This means we will have a doubble CAS to ensure this linked list is thread-safe and lock-free.
 <br> <br>
 
 ## What options do I have to clean up the marked node?
 

 Note the names probably have spelling mistakes

 Harris's linked list: [Timestamp 18:00]
 "logically" delete nodes instead of actually deleting them
 WHILE TRAVERSING the list, continuously fix the linked list by physically deleting those logically deleted nodes 
 you keep on fixing until you find a non-logically deleted next node OR nullptr by using CAS

 Harris-Michael strategy: [Timestamp 23:00]
 same strategy, but only fix the node you're interested in, even if it points to a logically deleted node
 don't fix the whole chain
 Only physically fix logically deleted node by using CAS from one node to the next node (not node to next of next node)

 Harris-Herlihy-Shavit
 even if you meet a logically deleted node, keep going without fixing the list
 this is to traverse fast
 this can be used for a fast look-up

 I will be using the Harris's Linked list version
 <br> <br>

 # Contributors and credits
\- main used documentation:
 A pragmatic implementation of Non-Blocking Linked-Lists: https://timharris.uk/papers/2001-disc.pdf <br>

\-  Theoretical information found using the following lecture about lock-free linked lists:
 https://www.youtube.com/watch?v=WYJBdAuX7zw <br>

 \-  http://corralx.github.io/2016/05/25/tag_ptr/<br>
 \-  https://en.wikipedia.org/wiki/Tagged_pointer 