
export default defineNuxtPlugin((nuxtApp) => {
  console.log('nuxtApp', nuxtApp)
  console.log('window', window)
  console.log('document', document)

  const onScroll = function(data){
    console.log('onScroll', data)
  }

  nuxtApp.hook('app:mounted', () => {
    /* your code goes here */
    console.log('page start Plugin running')
  })

  // nuxtApp.vueApp.beforeUnmount('app:beforeUnmount', () => {
  //   /* your code goes here */
  //   console.log('app:beforeUnmount')
  // })


  nuxtApp.hook('page:start', () => {
    /* your code goes here */
    console.log('page:start')
  })

  nuxtApp.hook('page:finish', () => {
    /* your code goes here */
    console.log('page:finish')
  })

  return {
    provide: {
      displayX: 'lzj',
      displayY: '666',
    }
  }

})