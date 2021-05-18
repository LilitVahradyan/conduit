export interface FeedModel {
   
            title: string,
            slug: string,
            body: string,
            createdAt: string,
            updatedAt: string,
            tagList: string[],
            description: string,
            author:{
                username: string,
                bio: string,
                image: string,
                following: boolean
            },
            favorited: boolean,
            favoritesCount: number
            
        
        
}