// fetching required static data on load
// self.addEventListener('install', e => {
//   console.log(e, 'SW has been installed!')
// })

// self.addEventListener('fetch', function(event) {
//   console.log(event,  'SWHAS BEEN FETCHED!!!')
// })

// notification
self.addEventListener('push', function (event) {
  if (Notification.permission === 'default') {
    self.Notification.requestPermission().then((res) => console.log(res))
    console.log('The permission request was dismissed.')
    return
  }

  if (Notification.permission === 'denied') {
    console.log(Notification.permission, "Permission wasn't granted. Allow a retry.")
    return
  }

  console.log('The permission request is granted!')

  try {
    event.waitUntil(
      self.registration.showNotification((event && event.data && event.data.text()) || 'Some Notification Here!')
    )
  } catch (e) {
    throw new Error(`Error in SW: ${e}`)
  }
})

self.addEventListener('sync', function (event) {
  console.log(event.tag, 'Sync is completed!!!')
})
