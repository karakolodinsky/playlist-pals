interface UserProfile {
        country: string;
        display_name: string;
        email: string;
        explicit_content: {
            filter_enabled: boolean,
            filter_locked: boolean
        },
        external_urls: { spotify: string; };
        followers: { href: string; total: number; };
        href: string;
        id: string;
        images: Image[];
        product: string;
        type: string;
        uri: string;
    }


    // Interface for a paged set of playlists
interface PagedPlaylists {
  href: string;            // Required: Link to the Web API endpoint returning the full result of the request
  limit: number;           // Required: The maximum number of items in the response
  next: string | null;     // Required: URL to the next page of items (null if none)
  offset: number;          // Required: The offset of the items returned
  previous: string | null; // Required: URL to the previous page of items (null if none)
  total: number;           // Required: The total number of items available to return
  items: Playlist[];       // Array of playlists (individual playlist objects as defined below)
}

// Interface for an individual playlist
interface Playlist {
  collaborative: boolean;         // True if the owner allows other users to modify the playlist
  description: string | null;     // The playlist description, or null if not modified/verified
  external_urls: ExternalURLs;    // Known external URLs for this playlist
  href: string;                   // A link to the Web API endpoint providing full details of the playlist
  id: string;                     // The Spotify ID for the playlist
  images: PlaylistImage[];        // Array of images associated with the playlist
  name: string;                   // The name of the playlist
  owner: User;                    // The user who owns the playlist
  public: boolean | null;         // The playlist's public/private status
  snapshot_id: string;            // The version identifier for the current playlist
  tracks: PlaylistTracks;         // A collection containing details of the playlist's tracks
  type: string;                   // The object type: "playlist"
  uri: string;                    // The Spotify URI for the playlist
}

// Interface for external URLs
interface ExternalURLs {
  spotify: string;                // The Spotify URL for the object
}

// Interface for playlist images
interface PlaylistImage {
  url: string;                    // The source URL for the image
  height: number | null;          // The image height, or null if unknown
  width: number | null;           // The image width, or null if unknown
}

// Interface for the user
interface User {
  href: string;                   // A link to the Web API endpoint for the user
  id: string;                     // The Spotify user ID
  type: string;                   // The object type: "user"
  uri: string;                    // The Spotify URI for the user
}

// Interface for playlist tracks
interface PlaylistTracks {
  href: string;                   // A link to the Web API endpoint where full details of the playlist's tracks can be retrieved
  total: number;                  // The total number of tracks in the playlist
}