import { useState, useEffect } from "react";

function useGithubInfo(userName){
    
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!userName || userName.trim() === "") {
            setData({});
            setError(null);
            return;
        }
        
        setLoading(true);
        setError(null);
        
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'User-Agent': 'GitHub-Info-App'
                    }
                });

                if (!response.ok) {
                    if (response.status === 403) {
                        throw new Error('GitHub API rate limit exceeded. Please wait a few minutes and try again, or visit https://github.com to search manually.');
                    } else if (response.status === 404) {
                        throw new Error('User not found. Please check the username and try again.');
                    } else {
                        throw new Error(`GitHub API error (${response.status}). Please try again later.`);
                    }
                }
                
                const result = await response.json();
                setData(result);
                setLoading(false);
                
            } catch (err) {
                console.error("GitHub fetch error:", err);
                setError(err.message);
                setData({});
                setLoading(false);
            }
        };

        fetchData();
    }, [userName])
  
    return { data, loading, error }
}

export default useGithubInfo;