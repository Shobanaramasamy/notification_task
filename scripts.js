    const notificationContainer = document.getElementById('notifications');
    let pausedTime, remainingTime;
    const notifications = [];
    let timeoutId;
   
   
    function showNotification(message) {    
        const notification = document.createElement('div');
        const loader = document.createElement('hr');
        notification.classList.add('notification');
        loader.classList.add('loader')
       
        notification.textContent = message;
        notificationContainer.appendChild(notification);
        notification.appendChild(loader)
        notifications.push(notification);


        const startTime = Date.now();
    
        timeoutId = setTimeout(() => {
            pauseNotification()
        }, 5000);

        function resumeNotification() {
            timeoutId = setTimeout(() => {
                removeNotification(notification);
            }, remainingTime);
        }


        function pauseNotification() {
            clearTimeout(timeoutId);
            pausedTime = Date.now();
            remainingTime = 5000 - (pausedTime - startTime);
          }

        notification.addEventListener('mouseenter', () => {
            console.log("###in mouseenter###")
            pauseNotification()
        });

        function removeNotification(notification) {
            const index = notifications.indexOf(notification);
            if (index > -1) {
                notification.remove();
            }
        }
     

        notification.addEventListener('mouseleave', () => {
            resumeNotification()
        });
    }
