---
title: "Uppy"
date: '2016-08-18'
author: ramon
template: article.jade
---
uppy (GitHub: [transloadit/uppy](https://github.com/transloadit/uppy), License: ISC, npm: uppy)

Uppy is very promissing file uploader that can upload files from local disk, Google Drive, Dropbox, Instagram, remote URLs, and hardware devices such as a webcam. You can upload basically anything you can think of, because of the plugin pattern it follows.
It also does not have an opinion about where you should upload it to

Uppy is being developed by the [Transloadit](https://transloadit.com/) team, because they felt the need for a better uploading experience for both for users and developers alike.

On the website the developers have a really wonderful example which also doubles as their playground.

```JavaScript
import Uppy from '../../../../src/core/Core.js'
import Dummy from '../../../../src/plugins/Dummy'
import Tus10 from '../../../../src/plugins/Tus10.js'
import Dashboard from '../../../../src/plugins/Dashboard'
import GoogleDrive from '../../../../src/plugins/GoogleDrive'
import ProgressBar from '../../../../src/plugins/ProgressBar.js'
import Webcam from '../../../../src/plugins/Webcam.js'
import MetaData from '../../../../src/plugins/MetaData.js'
import { UPPY_SERVER } from '../env'
const uppy = new Uppy({debug: true, autoProceed: false})
uppy
  .use(Dashboard, {trigger: '#uppyModalOpener'})
  .use(GoogleDrive, {target: Dashboard, host: UPPY_SERVER})
  .use(Webcam, {target: Dashboard})
  .use(Dummy, {target: Dashboard})
  .use(Tus10, {endpoint: 'http://master.tus.io:8080/files/'})
  .use(ProgressBar, {target: 'body'})
  .use(MetaData, {
    fields: [
      { id: 'resizeTo', name: 'Resize to', value: 1200, placeholder: 'specify future image size' },
      { id: 'description', name: 'Description', value: 'something', placeholder: 'describe what the file is for' }
    ]
  })
  .run()
```

Which provides you with this interface:

<img src="http://i.imgur.com/H54luKA.png" style="max-width: 800px; width: 100%" />

I think one of the greatest features is the resumable download support.
It let's you pause an upload and continues it at a different moment in time.

As the developers make very clear is that this project is not ready to be used in production yet. But they are working really hard to make it battle ready as soon as possible. I was especially impressed with the amount of commits that are coming into this library so I would expect us to have to wait very long.


If you want to know more about this amazing library head over to [uppy.io](http://uppy.io/)
