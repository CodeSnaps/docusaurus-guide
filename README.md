# Build Stunning Documentations With React & Docusaurus (Complete Guide)

Learn how to create stunning documentation in minutes with React and Docusaurus. Spend more time building your product and less time writing your documentation.

![Docusaurus](https://user-images.githubusercontent.com/47107420/267978511-9f934544-0fc4-44e1-84a1-150a4d9539d2.png)

## Here’s What You’ll Learn 👨🏻‍💻

- What is Docusaurus?
- Install Docusaurus
- Creating your own documentation
- MDX (Markdown + JSX)
- Import components into Markdown
- Using tabs, alerts and codeblocks
- Customizing the sidebar
- Implementing a table of contents
- Custom styling
- Creating custom pages
- Setting up the blog
- SEO
- Deployment

## Change Homepage to Use Images Instead

Here's an example, you can replace the images inside the array. Edit the located at `/src/components/HomepageFeatures/index.js`.

```jsx
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Image: require('@site/static/img/docusaurus-social-card.jpg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Image: require('@site/static/img/docusaurus-social-card.jpg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Image: require('@site/static/img/docusaurus-social-card.jpg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
```
