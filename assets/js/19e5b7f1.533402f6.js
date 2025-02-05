"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[653],{2210:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>T,contentTitle:()=>E,default:()=>P,frontMatter:()=>S,metadata:()=>A,toc:()=>V});var i=l(4848),s=l(8453),t=l(6540),a=l(4164),r=l(3104),o=l(6347),c=l(205),u=l(7485),d=l(1682),h=l(679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:l}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:l,attributes:i,default:s}}=e;return{value:n,label:l,attributes:i,default:s}}))}(l);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function v(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:l}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,u.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:i}=e,s=m(e),[a,r]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=l.find((e=>e.default))??l[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[o,u]=b({queryString:l,groupId:i}),[d,p]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,h.Dv)(l);return[i,(0,t.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:i}),g=(()=>{const e=o??d;return v({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&r(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!v({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var x=l(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:l,selectedValue:s,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),d=e=>{const n=e.currentTarget,l=c.indexOf(n),i=o[l].value;i!==s&&(u(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},n),children:o.map((e=>{let{value:n,label:l,attributes:t}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...t,className:(0,a.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function w(e){let{lazy:n,children:l,selectedValue:s}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=g(e);return(0,i.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,i.jsx)(j,{...n,...e}),(0,i.jsx)(w,{...n,...e})]})}function N(e){const n=(0,x.A)();return(0,i.jsx)(y,{...e,children:p(e.children)},String(n))}const k={tabItem:"tabItem_Ymn6"};function I(e){let{children:n,hidden:l,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(k.tabItem,s),hidden:l,children:n})}const S={sidebar_position:2},E="Installation",A={id:"install/README",title:"Installation",description:"Prerequisites",source:"@site/docs/install/README.md",sourceDirName:"install",slug:"/install/",permalink:"/docs/install/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",next:{title:"Quick start",permalink:"/docs/install/post-install"}},T={},V=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"NeoVim installation options",id:"neovim-installation-options",level:3},{value:"With an appimage",id:"with-an-appimage",level:4},{value:"Using PACMAN on Arch",id:"using-pacman-on-arch",level:4},{value:"Using APT on Ubuntu",id:"using-apt-on-ubuntu",level:4},{value:"For Windows:",id:"for-windows",level:3},{value:"First Install Chocolatey in an administrative-shell",id:"first-install-chocolatey-in-an-administrative-shell",level:4},{value:"Then install neovim and powershell 7",id:"then-install-neovim-and-powershell-7",level:4},{value:"Semi-optional dependencies",id:"semi-optional-dependencies",level:3},{value:"Release",id:"release",level:2},{value:"Stable",id:"stable",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"<strong>or</strong>",id:"or",level:4}];function q(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Neoivm 0.9.0+"}),(0,i.jsx)("h2",{id:"#heading-id",children:"Installing Neoivm 0.9.0+"}),(0,i.jsx)(n.h3,{id:"neovim-installation-options",children:"NeoVim installation options"}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: This is a summary of ",(0,i.jsx)(n.a,{href:"https://github.com/neovim/neovim/wiki/Installing-Neovim",children:"NeoVim's installation page"})]}),"\n"]}),(0,i.jsx)(n.h4,{id:"with-an-appimage",children:(0,i.jsx)(n.a,{href:"https://github.com/neovim/neovim/wiki/Installing-Neovim#appimage-universal-linux-package",children:"With an appimage"})}),(0,i.jsx)(n.p,{children:"This should work across all Linux distros."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage\nchmod u+x nvim.appimage\n./nvim.appimage\n"})}),(0,i.jsx)(n.p,{children:"Then consider moving this to your local/user bin & adding an alias to this"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mv ./nvim.appimage ~/.local/bin/\necho \"alias vim='/home/<YOUR USERNAME>/.local/bin/nvim.appimage'\" >>~/.<bashrc or zshrc>\n"})}),(0,i.jsx)(n.h4,{id:"using-pacman-on-arch",children:(0,i.jsx)(n.a,{href:"https://github.com/neovim/neovim/wiki/Installing-Neovim#arch-linux",children:"Using PACMAN on Arch"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo pacman -S neovim\n"})}),(0,i.jsx)(n.h4,{id:"using-apt-on-ubuntu",children:(0,i.jsx)(n.a,{href:"https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu",children:"Using APT on Ubuntu"})}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: This doesn't work with Debian"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo add-apt-repository ppa:neovim-ppa/stable\nsudo apt-get update\nsudo apt-get install neovim\n"})}),(0,i.jsx)(n.h3,{id:"for-windows",children:"For Windows:"}),(0,i.jsx)(n.h4,{id:"first-install-chocolatey-in-an-administrative-shell",children:"First Install Chocolatey in an administrative-shell"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\n"})}),(0,i.jsx)(n.h4,{id:"then-install-neovim-and-powershell-7",children:"Then install neovim and powershell 7"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"choco install neovim pwsh\n"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.nerdfonts.com/",children:"Use a Nerd Font"})," in your terminal emulator."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"git"}),", ",(0,i.jsx)(n.code,{children:"make"})," & other basic Linux CLI tools"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"node"}),", ",(0,i.jsx)(n.code,{children:"pip"}),", and ",(0,i.jsx)(n.code,{children:"cargo"})," to install additional language servers"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PowerShell 7+(pwsh)"})," for Windows"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"semi-optional-dependencies",children:"Semi-optional dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pynvim"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/sharkdp/fd",children:(0,i.jsx)(n.code,{children:"fd"})})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"release",children:"Release"}),"\n",(0,i.jsx)(n.h3,{id:"stable",children:"Stable"}),"\n","\n",(0,i.jsxs)(N,{children:[(0,i.jsx)(I,{value:"linux/macos",label:"Linux/MacOs",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bash <(curl -s https://raw.githubusercontent.com/nvoid-lua/nvoid/main/utils/installer/install.sh)\n"})})}),(0,i.jsx)(I,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"iwr https://raw.githubusercontent.com/nvoid-lua/nvoid/main/utils/installer/install.ps1 -UseBasicParsing | iex\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,i.jsxs)(n.p,{children:["You can remove Nvoid (including the configuration files) using the bundled ",(0,i.jsx)(n.code,{children:"uninstall"})," script"]}),"\n",(0,i.jsxs)(N,{children:[(0,i.jsxs)(I,{value:"linux/macos",label:"Linux/MacOs",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bash ~/.local/share/nvoid/nvoid/utils/installer/uninstall.sh\n"})}),(0,i.jsx)(n.h4,{id:"or",children:(0,i.jsx)(n.strong,{children:"or"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bash <(curl -s https://raw.githubusercontent.com/nvoid-lua/nvoid/main/utils/installer/uninstall.sh)\n"})})]}),(0,i.jsx)(I,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"Invoke-WebRequest https://raw.githubusercontent.com/nvoid-lua/nvoid/main/utils/installer/uninstall.ps1 -UseBasicParsing | Invoke-Expression\n"})})})]})]})}function P(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>r});var i=l(6540);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);