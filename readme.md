# Static Site Builder with Grunt

This is everything you need to build a static website, using Grunt to compile your HTML, CSS & JS with livereload.

#### Setup

- Open terminal, `cd` to where you keep your sites.
- Clone this repo `git clone git@github.com:AdamMarsden/static-site-builder.git YOUR-SITE-NAME`.
- `cd` into your new site folder.
- Remove the `.git` folder.
- In terminal initiate a new git folder `git init`.
- Create a git repo on your prefered git site e.g GitHub.
- Add the new remote `git remote add origin URL PROVIDED` from your newly created repo.
- Make your first commit `git add -A && git commit -m "initial commit"`.
- Push your code to your own repo `git push -u origin --all`.
- In terminal run `sudo npm install` to install the projects dependancies.
- Once complete, in terminal run `grunt` to get started.

#### Build & Dist
- The `build` folder is where you will do all of your work.
- The `dist` folder is where everything in the `build` with compile to.

#### Adding HTML Pages
- Add your new page in `build/html`.
- In `Gruntfile.js` on line 26 add where you'd like the page to compile `'dist/new-page.html' : 'build/html/new-page.html'`.

#### Adding JS
- Add your new JS file in `build/js`.
- In `Gruntfile.js` on line 39 add your new file `build/js/new-file.js',`.
- You can change the order in which you'd like the files compile in `dist/js/main.min.js` by placing one above another.

#### Adding SVGs
- Add your SVG to `build/img/svgs` with a desired file name.
- Now add the SVG to your HTML by referencing to it `<svg><use xlink:href="#svg-file-name"/></svg>`.
- To ensure that your SVG scales correctly you'll need to add `viewBox` to `<svg>`.
  - To find the `viewBox` first go into your SVG file `build/img/svgs` and you'll see something like this `viewBox="0 0 295.2 277.2"` copy it.
  - Paste this into the `<svg>`, it should look something like this `<svg viewBox="0 0 295.2 277.2"><use xlink:href="#svg-file-name"/></svg>`

#### Useful Links
- Sass Architecture Structure | http://git.io/6SmiOw
- CSS Declaration order | http://git.io/vJ7cU
- CSS Guidelines | http://cssguidelin.es/
- Create Favicons | http://realfavicongenerator.net/
