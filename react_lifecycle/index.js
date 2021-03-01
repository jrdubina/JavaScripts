// Stages
// 
//  - Initial Render
//  - Updates
//  - Unmount

// Classes or Function Hooks. Hooks are functions that let you Hook Into React state and lifecycle features from function components.

useEffect(() => {
    console.log('All the Time')
}); // First render AND all updates

useEffect(() => {
    console.log('Only once')
}, []); // First render ONLY

useEffect(() => {
    console.log(`On ${variable} updates`)
}, [variable]); // Updates ONLY