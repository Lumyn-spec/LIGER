// Follow/Unfollow System Implementation
class FollowSystem {
    constructor() {
        this.followers = {};
    }
    
    follow(userA, userB) {
        if (!this.followers[userA]) {
            this.followers[userA] = new Set();
        }
        this.followers[userA].add(userB);
    }

    unfollow(userA, userB) {
        if (this.followers[userA]) {
            this.followers[userA].delete(userB);
        }
    }

    getFollowing(user) {
        return this.followers[user] ? Array.from(this.followers[user]) : [];
    }
}