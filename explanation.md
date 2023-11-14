**drawWinningLine()**
1. The function take two parameters, size and ...winningCombination. Size in this case takes either 3 or 4 as its values, indicating either a 3 by 3 or 4 by 4 board. ...winningCombination uses rest operators to group the ids of the three cells as a single array.
2. The getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport. In this case, it passes this information of the three cells to a variable called positions.
3. createElementNS() is used to create XML-based elements such as line and svg in this case. It then sets the properties of the svg by calling the function setAttribute().
4. It then calculates the position of the line by using the abolute left and top distance from the positions array above and sets the attribute of the line accordingly.
5. After that it add line as the child of svg and svg as the child of the body element.

**showWinner(winner)**
1. The function take one parameter winner that is either 'X', 'O' or 'Draw'.
2. The modal panel consists of theee DOM elements and they are created and styled sequentially. Both modalBackground and modalPanel are divs and closeButton is a button. The styling is done using elementReference.style.property.

**clickHandler(id)**
1. The clickHandler is applied to each cell button of the board. The parameter id is used to select the element to which the id is assigned. 
2. !button.hasChildNodes() ensures that the subsequent appending logic only applies to the button on which a piece has not been rendered yet.
3. An image element is created and by keeping track of the variable step either a cross or circle is rendered onto the board accordingly. Also, either a 0 or 1 is updated to the correct position of the board array.