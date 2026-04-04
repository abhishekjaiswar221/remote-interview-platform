import ActiveSessions from "@/components/ui/ActiveSessions";
import CreateSessionModal from "@/components/ui/CreateSessionModal";
import RecentSessions from "@/components/ui/RecentSessions";
import StatsCards from "@/components/ui/StatsCards";
import WelcomeSection from "@/components/ui/WelcomeSection";
import {
  useActiveSessions,
  useCreateSession,
  useRecentSessions,
} from "@/hooks/useSession";
import { useUser } from "@clerk/react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({
    problem: "",
    difficulty: "",
  });

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } =
    useActiveSessions();

  const { data: recentSessionsData, isLoading: loadingRecentSessions } =
    useRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/app/session/${data.session._id}`);
        },
      },
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) => {
    if (!user.id) return false;

    return (
      session.host?.clerkId === user.id ||
      session.participant?.clerkId === user.id
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300">
        {/* Welcome Section */}
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Stats */}
            <div className="xl:col-span-1">
              <StatsCards
                activeSessionsCount={activeSessions.length}
                recentSessionsCount={recentSessions.length}
              />
            </div>

            {/* Active Sessions */}
            <div className="xl:col-span-2">
              <div className="bg-base-100 border border-base-300 rounded-2xl shadow-sm p-5 sm:p-6">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Active Sessions
                  </h2>

                  <span className="text-sm text-base-content/60">
                    {activeSessions.length} running
                  </span>
                </div>

                <ActiveSessions
                  sessions={activeSessions}
                  isLoading={loadingActiveSessions}
                  isUserInSession={isUserInSession}
                />
              </div>
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="bg-base-100 border border-base-300 rounded-2xl shadow-sm p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                Recent Sessions
              </h2>

              <span className="text-sm text-base-content/60">
                {recentSessions.length} total
              </span>
            </div>

            <RecentSessions
              sessions={recentSessions}
              isLoading={loadingRecentSessions}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
};

export default Dashboard;
