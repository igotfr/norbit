import { Dialog } from "./components/ui/dialog";
import { EmptyGoals } from "./components/empty-goals";
import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
//import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeekSummary } from "./http/get-week-summary";

export function App() {
  /*const [summary, setSummary] = useState<SummaryResponse | null>(null);

  useEffect(() => {
    fetch("http://localhost:3333/summary")
      .then((response) => response.json())
      .then((data) => setSummary(_p => data))
  }, []);*/

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getWeekSummary,
    staleTime: 1000 * 60 // 60 seconds
  });

  return (
    <Dialog>
      {data && data?.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}