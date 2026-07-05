## ToDos

#### Content Review & Fallback Content

- [x] Finish content and code review for all sections and all pages
  - [x] Navbar
  - [x] Footer
  - [x] Contact Section
  - [x] Home page
    - [x] Hero section
    - [x] About section
    - [x] Projects section
    - [x] Blog section

  - [x] About page
    - [x] About Me section
    - [x] Skills section
    - [x] Experience section
    - [x] Education section

  - [x] Projects page
    - [x] Projects section
    - [x] Search and filter functionality
    - [x] Single project page

  - [x] Blog page
    - [x] Blog posts section
    - [x] Search and filter functionality
    - [x] Single blog post page
    - [x] Twitter feed section
    - [x] MDX components

  - [x] 404 page

#### Fixes and Improvements

- [x] Add error handling everywhere for all the API calls and all the components
- [x] Update fallback blogs with some real blog data instead of mock data
- [x] Update fallback content for projects
- [x] Add a logging system to log all the errors and all the important events across the entire website
- [x] Remove unnecessary comments from the entire codebase
- [x] Add logging to more places for info level, warnings, etc. and make them colored accordingly as well. Also don't log the entire err in console as it clutters the logs, only log a dev friendly message.
- [x] The about bio should be different on the mini-about-section on the home page as it'll be concise and it should be different long elaborated version on the about page. Both should come from sanity and both should have fallback versions as well. But both of them should be separate.
- [x] The about page image won't necessarily be a circular image. It may be a landscape or a portrait image
- [x] Create a signature style SVG logo from my name initials DC and add it to Navbar replace the "</>" logo. Also add it to Footer
- [x] Less rounded corners for code blocks on blog posts
- [x] Cursor "not-allowed" for newsletter search box and button
- [x] Pagination does not move back to the top of the page when we click on it, fix that
- [x] Fix the nav bottom outline on scroll
- [x] Replace the X feed with a newsletter component and set up it's integration
- [x] The nav button for small screens is not working, fix that
- [x] Remove the right side padding for nav hamburger menu
- [x] For the about page, first "A bit about me" section should match the width of the other sections. Maybe make the image a bit bigger in size to account up for the wider space. Also the info text and image should also come from Sanity first and if that's not available only then use the fallback content.
- [x] For the projects page, the filters should be on tech stack and not the project tags
- [x] For the projects page, the client work projects should have a tag displayed as well just like featured projects have
- [x] For the projects detail page, we should show the description and not summary as it is a detailed page
- [x] For the about page, experience section, show the start/end dates in this format "Aug 2020 - Sep 2021"
- [x] Can we also match the width of the footer with the rest of the sections as it is a bit less wide right now.
- [x] Check if a table of contents is needed for the blog posts and add it if necessary
- [x] Change the wording for the last para of about me section on the about page. The defend with my chest line reads weird
- [x] Fix the no. of all the filters button with an upper limit where only the ones with high count show up but don't put them in fixed asc/desc order of count (projects page and blog page sidebar)
- [x] Fix the table of contents not showing issue
- [x] Proof read blog articles
- [x] Proof read fallback projects
- [x] Change "daily" to "almost daily" in the subheading of the skills section on about page
- [x] Fix point #2 on makse experience on about page
- [x] Fix the urls on the 404 page
- [x] Add a fallback resume
- [x] Fix all the typescript errors across the entire codebase
- [x] Filename inside the code blocks only works with `//` comment right now but it should support language specific comments as well like `#` for python or bash, etc.
- [x] On the projects detail page, when the date is not provided, the icon still shows. Check for all such issues.
- [x] There should be icons for each extension in the code block right before the filename on it's left. We should icons for all major file type extensions, including stuff like ejs, etc.
- [x] Check the irrelevant fields in Sanity Schema everywhere and remove them if they're not being used. Check the ones I am specifying my doubts about and then the other ones as well. So for these, check the code and if these fields are rendered then let them be but if they aren't then remove them from schema
  - [x] For about section - headline, subheadline, journey, philosophy
  - [x] For experience section - company logo
  - [x] For skills - icon, Proficiency, order
  - [x] For projects - Architecture Details, Gallery
  - [x] Remove the complete social link schema as that is not at all required
- [x] Move fallback education from experience file to fallback about file
- [x] Update the fixed set of skill categories based on the categories defined in the fallback-skills file and also add a others category for misc items
- [x] Make these the primary section in schema which will be used as the identifier for the field item
  - [x] For experience - company name
- [x] Make the blog page use the blog title for the url and not blog file name
- [x] Confirm if the future blogs will be published automatically when the date comes or would that require a deploy trigger manually (now automatic via hourly ISR on blog routes)

#### Testing & QA

- [x] Test the entire website with the fallback content
- [x] Test empty error states
- [x] Test pagination
- [x] Test blog and all MDX components
- [x] Test single project page
- [x] Test all project pages with full search and filtering functionality

#### Branding and SEO & Metadata

- [x] Update all the meta information for all pages, including Open Graph and Twitter cards
- [x] Update siteConfig with all the correct information
- [x] Add the ogImage from chatGPT to public dir
- [ ] Implement a newsletter subscription system

#### CMS Integration (Sanity)

- [x] Connect to sanity with the main account and the correct project id
- [x] Add all the content to sanity
- [x] Test the entire website with the sanity content

#### Deployment & Launch

- [ ] Deploy the website to production
- [x] Check for a custom domain based email address and set it up if available

#### Marketing & Announcement

- [ ] Announce the launch of the new website on all social media platforms
