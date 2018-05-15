# my-selesti-assessment
Response to assessment (https://github.com/Selesti/Dummy-Brief)

1. What frameworks are you familiar with and give examples of when you have used them? (Eg Laravel, Zend, Symfony, Bootstrap, UIKit, Vue, React)

A: 

~~~~

I am familiar with the below frameworks:

Laravel & Symfony
React
Bootstrap for css/javascript

~~~~

2. Describe your competence levels in the following CMS's, giving URLs where possible of sites you have built in any of them
Magento 1
Magento 2
Wordpress
Shopify
Drupal
Any others you want to showcase

A:

~~~~

I have never used any CMS's; all of my experience comes from building applications from scratch

~~~~

3. Explain what testing procedures you follow when developing a site? (Don't forget to tell us about any automated testing processes along with specific tools and software you like to use)

A:

~~~~

I would like get more experienced within testing procedures. However, we currently use Jenkins on a virtual server that deploys our code to a staging server and then builds. This is triggered whenever the master branch in committed to. This branch is protected and only certain individuals can commit to it.

~~~~

4. Whats your favourite latest CSS or JS feature?

A:

~~~~

ES6 syntax for writing functions, and template literals and multiline comments. Using Saas for writing object orientated css.

~~~~

5. What experience do with NPM, Composer, and Yarn?

A:

~~~~

Experienced in using NPM for managing javascript dependencies on web applications. Also using Composer heavily for Laravel projects.

~~~~

6. What experience do you have with managing Apache & Nginx? eg setting up virtual hosts and server blocks

A:

~~~~

I am experienced in deploying and managing Apache servers, more recently on Ubuntu virtual servers in AWS. We using virtual hosts regularly for hosted sites on sub-domains of the same domain name.

~~~~

7. How do you make sure your code is consistent and maintainable?

A:

~~~~

Establishing standards for syntax; such as camelCasing or ProperCasing.

Standards can either be maintained across the entire company, collectively or individually. 


~~~~

8. Describe the most comprehensive web project you have worked on and what you did, what made you proud of it, how you achieved the objectives

A:

~~~~

This would be FOURSITE. A project primarily running on a Laravel framework.

~~~~

9. Provide 3 examples of different server-side optimisation techniques to decrease page load time?

A:

~~~~

Caching of common database result sets using tools Redis 

Caching of views/routes in frameworks such as Laravel

Assessing commonly-used middleware to see if anything can be improved.

Enabling assets such as js/css files to be loaded from compressed files


~~~~

10. With many new security features being widely available, how would enhance a website's security? (Think about server side and the browser security)

A: 

~~~~

Using Let's Encrypt so that SSL certificates are renewed every 90 days. 

Ensure SQL injection is prevented by binding parameters properly.

Regularly installing the latest security patches.

Limiting requests so that they may only communicate over HTTPS

Rate limit api's so that brute force attacks are rendered virtually useless



~~~~
