# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
   = Imperative involves writing step-by-step instruction on how to update the UI, while declarative involves describing what the UI should look like based on the current data.

2. Why must a component name start with a capital letter?
   = To distinguish custom react components from standard HTML tags.

3. What does a fragment <>...</> do, and why not just use a <div>?
   = A fragmant <>...</> allows to group multiple sibling elements without adding extra node to actual HTML DOM. Using <div> adds an unnecessary wrapper element that can clutter the markup and break the CSS layout.

4. Name one benefit of splitting the UI into small components.
   = The benefit of breaking UI into small components is that it can be use across multiple different pages without rewriting of duplicating the code.
