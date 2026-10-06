import { useState } from 'react'
import { MainButton, SearchBar } from './components'
import useGithubInfo from './hooks/useGithubInfo'


function App() {

  const [userName, setUserName] = useState("")
  const [searchedUserName, setSearchedUserName] = useState("")

  const result = useGithubInfo(searchedUserName)
  
  const githubInfo = result.data
  const loading = result.loading
  const error = result.error

  const onSearch = () => {
    if (!userName.trim()) {
      alert("Please enter a username!");
      return;
    }
    setSearchedUserName(userName)
  }


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-6xl">

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
        >
          <div className="p-8 flex flex-col items-center">
            <SearchBar
              userName={userName}
              onChange={(userName) => setUserName(userName)}
              placeholder="Search GitHub users..."
            />
           </div>
        </form>

        <div>

          {loading && (
            <div className="flex justify-center items-center mt-8">
              <div className="text-blue-600 text-lg">Loading...</div>
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center mt-8">
              <div className="text-red-600 text-center max-w-md p-4 bg-red-50 rounded-lg">
                <p className="font-semibold mb-2">⚠️ API Error</p>
                <p className="text-sm">{error}</p>
                {error.includes('rate limit') && (
                  <p className="text-xs mt-2 text-gray-600">
                    Tip: You can also visit <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub.com</a> to search manually.
                  </p>
                )}
              </div>
            </div>
          )}

          {!loading && !error && githubInfo && Object.keys(githubInfo).length > 0 && (
            <>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12">
                <MainButton label="Avatar:" value={githubInfo.avatar_url} />
                <MainButton label="Profile:" value={githubInfo.html_url} />
                <MainButton label="Repositories:" count={githubInfo.public_repos} value={`${githubInfo.html_url}?tab=repositories`} />
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12">
                <MainButton label="Followers:" value={githubInfo.followers} />
                <MainButton label="Following:" value={githubInfo.following} />
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  )
}

export default App