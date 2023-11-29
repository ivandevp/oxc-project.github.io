import{_ as e,o as t,c as i,Q as r}from"./chunks/framework.725e5b03.js";const u=JSON.parse('{"title":"Minifier","description":"","frontmatter":{"title":"Minifier","outline":"deep"},"headers":[],"relativePath":"docs/contribute/minifier.md","filePath":"docs/contribute/minifier.md","lastUpdated":1701263146000}'),o={name:"docs/contribute/minifier.md"},a=r('<h1 id="minifier" tabindex="-1">Minifier <a class="header-anchor" href="#minifier" aria-label="Permalink to &quot;Minifier&quot;">​</a></h1><p>JavaScript minification plays a crucial role in optimizing website performance as it reduces the amount of data sent to users, resulting in faster page loads. This holds tremendous economic value, particularly for e-commerce websites, where every second can equate to millions of dollars.</p><p>However, existing minifiers typically require a trade-off between compression quality and speed. You have to choose between the slowest for the best compression or the fastest for less compression. But what if we could develop a faster minifier without compromising on compression?</p><p>We are actively working on a prototype that aims to achieve this goal, by porting all test cases from well-known minifiers such as <a href="https://github.com/google/closure-compiler" target="_blank" rel="noreferrer">google-closure-compiler</a>, <a href="https://github.com/terser/terser" target="_blank" rel="noreferrer">terser</a>, <a href="https://github.com/evanw/esbuild" target="_blank" rel="noreferrer">esbuild</a>, and <a href="https://github.com/tdewolff/minify" target="_blank" rel="noreferrer">tdewolff-minify</a>.</p><p>Preliminary results indicate that we are on track to achieve our objectives. With the Oxc minifier, you can expect faster minification times without sacrificing compression quality.</p>',5),s=[a];function n(c,l,f,m,p,h){return t(),i("div",null,s)}const _=e(o,[["render",n]]);export{u as __pageData,_ as default};
