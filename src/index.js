import "./styles.css";
import "./embed";

document.getElementById("app").innerHTML = `
<a style="
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  font-size: 13px;
  font-weight: 500;
  color: white;
  background-color: rgb(21, 21, 21);
  cursor: pointer;
  border: 1px solid rgb(52,52,52);
  border-radius: 4px;
  text-decoration: none;
  font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  z-index: 99999999999;
" href="https://github.com/icueMike/New-World-Embed-Script" target="_blank" rel="noopener noreferrer">Open Github</a>

<h1>Hello Tool Tip!</h1>
<div>
<center>
Hover your mouse over this tool tip here 👉 <a href="https://nwdb.info/db/item/potionfocust4"><b>Infused Focus Potion</b></a>
</center><br />
</div>
`;
