Vim commands

=================================== editing in insert mode
iIaA - editing in line
i - insert left
a - insert right
I - insert beginning
A - insert end

=================================== navigation vertical
hjkl - navigation
h - left
j - down
k - up
l - right

<number> + hjkl to move number of lines in that direction

gg - go to the top of file
G - go to bottom of file

shift + { - move up a block of code
shift + } - move down a block of code
<number> + shift + { or shift + } to move number of blocks up or down

: <number> - to go to line

; - takes you to all instances of word in front of it
(best used to find functions in code)

zz - to center screen where cursor is

=================================== navigation horizontal
w <number> - moves to the right word by word
b <number> - moves to the left word by word

0 - go to beginning of line
$ - go to end of line
^ - got to beginning of written line

t + <char> - takes you before entered char
(can be combined with d or c to change or delete sections of code)
f + <char> - takes you to entered character
(can also be conbined with ; to find the next instance)

% - toggles brackets, parenthesis or blocks

=================================== edting in command mode
x - delete char
r - replace char

u - undo last command or change
ctrl + r - redo

dd <number> - delete a line (also copies line)
D - delete the rest of the line
C - deletes rest of the line and enters editing mode
d - delete to be combined with other commands
c - deletes part of code combined with t of f (enters insert mode)
yy <number> - copy line
y - copy selected text

p - paste below
P - paste above

o - inserts line below and enters insert mode
O - insets line above and enters inset mode

cw - changes word, deletes word and enters insert mode
ew - deletes word

==================================== visual mode
shift + v - enter visual mode (selecting mode)
(can do navigation or editing commands on top of that)

d - delete
(can be combined with "movement" commands to delete entire sections)
