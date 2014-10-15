Markdown ~~WYSIWYG~~ [1](/#/blog/markdown "Removed By Copywriter")
==================================================================

Remember FCKeditor?
-------------------
Ah yes the classic WYSIWIG FCKeditor. The good ol' ~~pull my hair out~~ days. Manually fixing all the
ghost HTML created by the tool that was suppose strip content 'paste(d) from word' to allow Copywriters the ability to
quickly change their own content without the need for Engineering efforts (breath, that was a mouthful).
Thankfully Engineers fixed all that nonsense... right? Answer: Yes and No. Amazingly the more recent incarnation
of FCKeditor, [CKeditor](http://ckeditor.com/), while better than it's predecessor, still suffers from the same
fundamental flaws. The entropy (complexity / messiness) of the underlying source HTML still tends to increase as edits
are made. Luckily a much better technology is available; Markdown.

Markdown in a Nutshell
----------------------
Its common place these days to see [Markdown](http://en.wikipedia.org/wiki/Markdown "Wikipedia") (\*.md files)
in almost any [git](http://git-scm.com/) repository. [GitHub](http://github.com), while not the first to use Markdown,
certainly added to it's popularity by adopting a [flavor](https://help.github.com/articles/github-flavored-markdown/)
of Markdown with popular extensions such as [Fensed Code Blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks).
But Markdown is more than a convenient documentation
syntax. By design it's intended goal was to provide a writing syntax which was "easy-to-read, easy-to-write" and easily
converted into HTML.

Enter Our Copywriters
-----------------------
Markdown is an ideal syntax for these types of tools. Most Copywriters I've worked with are
already familiar with Markdown. In any case it's easy to learn and Copywriters new to Markdown
generally pick it up in a day. It's certainly easier to read and write and requires very little knowledge, if
any, about html. What they still need however is a robust, real-time mechanism for updating
Markdown based content.

The first action a User takes when visiting a new site is almost certainly to read. Copywriters therefore are crucial contributors
to the User's first Impression. Knowing that the first impression is the most crucial, therefore we should aim to empower
our Copywriters with as much agility as possible. It is painful for even us Engineers to see a landing page typo, which must
wait for the standard release processes, no matter how fast they are before it's fixed.  This type of static content should
be owned by the Copywriters, decoupled from the application, and necessitate either a separate deployment path (my preference)
and/or administrative power tools.

These types of features have historically taken lower priority with many living out their existence in the back log.
The classical perspective enforces a strict separation between Copywriters and the product, and enforces a restrictive dependency
on release processes, which often include rebuilding the entire application, though only static content changes are logically necessary.

We collectively become more efficient by placing power tools in the hands of Copywriters.
Initially Copywriters will have more freedom and agility allowing them to experiment more often and remain on task
instead of waiting for Engineering cycles to become available. Likewise Engineering cycles otherwise required to make changes
to static content can instead be spent on higher value items.

General Thoughts
----------------
In general I believe we Engineers should remind ourselves to keep in mind that the next feature may or may not be more valuable
than empowering our coworkers with better tools and automation.

More
----
1. [stackedit.io](https://stackedit.io/) - Markdown based WYSIWYG





