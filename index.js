
function typingEffect() {
    return {
        messages: ['Hello.', 'I am Georgi Nyagolov.', 'Web Developer.', 'Welcome to my portfolio.'],
        currentMessageIndex: 0,
        currentMessage: '',
        typingSpeed: 100,
        deletingSpeed: 50,
        showAnimation: true,
        startTyping() {
            this.typeCharacter();
            
        },
        typeCharacter() {
            if (this.currentMessage.length < this.messages[this.currentMessageIndex].length) {
                this.currentMessage += this.messages[this.currentMessageIndex].charAt(this.currentMessage.length);
                setTimeout(this.typeCharacter.bind(this), this.typingSpeed);
            } else {
                this.isDeleting = true;
                setTimeout(this.deleteCharacter.bind(this), 1500);
            }
        },
        deleteCharacter() {
            if (this.currentMessage.length > 0 && this.currentMessageIndex !== this.messages.length - 1) {
                this.currentMessage = this.currentMessage.slice(0, -1);
                setTimeout(this.deleteCharacter.bind(this), this.deletingSpeed);
            } else {
                this.isDeleting = false;
                this.currentMessageIndex++;
                if (this.currentMessageIndex >= this.messages.length) {
                    this.showAnimation = false; // Stop animation at the last message
                } else {
                    setTimeout(this.typeCharacter.bind(this), this.typingSpeed);
                }
            }
        }
    };
}



  