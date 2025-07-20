import React from "react";

const AnnouncementList = () => {
  return (
    <>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
          <MessageSquare className="w-6 h-6 text-blue-500" />
          <span>Recent Announcements</span>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
            {announcements.length}
          </span>
        </h3>

        {announcements.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
            <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No announcements yet</p>
            <p className="text-gray-400 text-sm mt-2">
              Be the first to share an update!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={announcement.photoURL}
                    alt={announcement.author}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-sm flex-shrink-0"
                  />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {announcement.author}
                        </h4>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center space-x-1 text-gray-500 text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{formatTimestamp(announcement.timestamp)}</span>
                        </div>
                      </div>
                      {announcement.authorId === user.uid && (
                        <button
                          onClick={() =>
                            handleDeleteAnnouncement(announcement.id)
                          }
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                          title="Delete announcement"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {announcement.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};



export default AnnouncementList;