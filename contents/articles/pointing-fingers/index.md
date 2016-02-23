---
title: 'Pointing Fingers'
date: '2016-02-23'
author: ramon
template: article.jade
---

pointing-fingers (GitHub: [jareware/pointing-fingers](https://github.com/jareware/pointing-fingers), License: MIT, npm: pointing-fingers)

A interest of mine is testing. Sadly there are not that many changes in the Javascript community in the field of testing.
But then I found `pointing-fingers` over the weekend, which is a tool for testing upstream API's.
Since "Software doesn't exist in a vacuum" we need to take unexpected API changes into account.
But thoroughly testing third party API's is of course not what we want to do.
This tool offers you a sensible middle ground, and a convenient workflow for:

- Documenting the upstream API format, as not all API's are perfectly documented
- Versioning that documentation, as API's tend to change over time
- Automatically alerting you to API changes, as sometimes upstream vendors won't
- Explicitly accepting those API changes, as your app will likely need to be changed accordingly

An example test with all the optional options using Mocha and Chai's `assert`:

```javascript
import { assert } from 'chai';
import { testUpstreamChanges } from 'pointing-fingers';

describe('GitHub API', () => {
  testUpstreamChanges({
    learn: false, // turn this on to update your fixtures (defaults to false)
    fixtures: 'test/fixtures/', // fixtures will be written here (defaults to "/dev/null")
    runner: it, // run each test in a separate Mocha it() block (defaults to running everything together)
    assert: assert.deepEqual, // which assert(actual, expected) to use (defaults to simple string comparison)
    placeholder: '(IGNORED IN TEST SUITE)', // ignored fields are replaced with this (defaults to null)
    ignores: [ // these are simply delegated to lodash's _.set() (defaults to [])
      'data.documentation_url', // we don't care if the doc URL changes, so ignore that field
      'headers.content-length', // this could also change spontaneously, and we're not interested
      'headers.date' // ^ ditto
    ],
    transforms: [ // these are invoked with the response object to allow arbitrary checks/ignores (defaults to [])
      res => res.status = (res.status >= 400 && res.status < 500) // ensure it's 4xx, but tolerate small changes
      /*
      // transforms which throw an Error are ignored, so it's safe to traverse/iterate complex objects without
      // littering the transform function with key existence checks. also, the res object is always an isolated
      // clone, so in-place mutation is fine.
      res => res.data.Teams.forEach(x => x.TeamRankingPoints = isNumber(x.TeamRankingPoints)),
      */
    ],
    headers: { // these are attached to outgoing requests (defaults to {})
      'X-Api-Key': process.env.MY_SECRET_KEY
    },
    method: 'GET', // (defaults to "GET")
    base: 'https://api.github.com', // all URL's are prefixed with this (defaults to "")
    urls: [ // these are the actual URL's that will be tested (defaults to [])
      '/user' // the URL's can be listed as simple strings
      /*
      { // ...but also as objects
        url: '/something-else',
        headers: { // all options (ignores, transforms, etc) can be overridden per-URL
          'X-Api-Key': 'some other key'
        }
      }
      */
    ]
  });
});
```

Head over to the challenge page of [Websocket Challenge - part two](http://daily-javascript.com/challenges/websocket-challenge-part-two/) and see what you need to do in order to make on to this weeks Hall of Hero's.
