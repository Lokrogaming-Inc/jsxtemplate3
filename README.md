

![Stars](https://img.shields.io/github/stars/Lokrogaming-Inc/jsxtemplate3) &nbsp;
![Languages](https://img.shields.io/github/languages/count/Lokrogaming-Inc/jsxtemplate3) &nbsp;
![Top Language](https://img.shields.io/github/languages/top/Lokrogaming-Inc/jsxtemplate3) &nbsp;
![Last Commit](https://img.shields.io/github/last-commit/Lokrogaming-Inc/jsxtemplate3) &nbsp;


##  📋 Versions

```text
Versions:
   V0.7.0 
 ___________________

   * Added Bash Scripts for faster and a more efficient way to commit to github
   * Added a useShare-Hook for easier sharing of text, URls and more!
 ___________________
  
 V0.7.5
 ___________________
   
   * Added a share button, so the user is able to share the site
   * Added a universal useShare-Hook for sharing multiple types of text/URls.
 ___________________

 V0.8.0
 ___________________

   * Added a GitHub workflow for automatic updating of screenshots
   * Added nerdy stats at the top of the README.md-file
   * Fixed Contact.jsx page and removed the 'No Image Selected' text on profile cards
   * Added a visitor-counter on the bottom of the README.md-file
   
   * Planning to change the background system for the contact page
 ___________________ 
 
```

| Version      | Key-Features | Date   | Supported
|-----------|--------------|----------|---------|
| V0.7.0    | Initial Commit       | 28.5.2026   | ✅️ |
| V0.7.5  | useShare-Hook      | 29.5.2026 | ✅️ |
| V0.8.0 | Updated Hero, Contact-Page and README-File | 30.5.2026 | ✅️ |



## 🖼 Picture Gallery (picture from the last commit)
![screenshot](/screenshots/home.png)



##  Hooks

###  useHooks
  
Basic Share Button: 
```jsx
import { useShare } from "../hooks/useShare";

export default function Button() {
  const { shareCurrentUrl } = useShare();

  return (
    <button
      onClick={() =>
        shareCurrentUrl({
          title: "Meine Website",
          text: "Schau dir das an!",
        })
      }
      className="px-4 py-2 bg-blue-600 text-white rounded-xl"
    >
      Share
    </button>
  );
}
```

Text Share:
```jsx
const { shareText } = useShare();

shareText("Das ist ein cooler Text");
```

URl Sharing:
```jsx
const { shareUrl } = useShare();

shareUrl("https://google.com", {
  title: "Google",
});
```

Share current URl:
```jsx
const { shareCurrentUrl } = useShare();

shareCurrentUrl({
  title: "Check this page",
  text: "Sehr coole Seite",
});
```

## Visitors

![Visitors](https://count.getloli.com/@LokrogamingInc-Jsxtemapate3?name=eleven-shanghai&theme=e621&padding=7&offset=3&align=center&scale=1&pixelated=0&darkmode=1)
=======

# jsxtemplate
