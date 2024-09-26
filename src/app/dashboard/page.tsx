import NavigateButtonButton from "@/components/button/NavigateButtonButton";

const ChallengeMock = [
    {
        id: 1,
        name: "만원 챌린지",
        totalRemainingMoney: +13000,
        progressDays: 7,
        totalDays: 30,
    },
    {
        id: 2,
        name: "오천원 챌린지",
        totalRemainingMoney: -7000,
        progressDays: 12,
        totalDays: 30,
    },
    {
        id: 3,
        name: "일주일 챌린지",
        totalRemainingMoney: +2000,
        progressDays: 2,
        totalDays: 7,
    },
];

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-12">
            <div>
                <h2 className="text-2xl font-bold mb-3.5">
                    진행중인 챌린지에요.
                </h2>

                <div className="flex flex-col gap-2">
                    {/* 챌린지는 최대 5개까지 만들 수 있음 */}
                    {ChallengeMock.map((challenge) => (
                        <li
                            key={challenge.id}
                            className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                        >
                            <div>
                                <div className="text-sm font-medium">
                                    {challenge.name}
                                </div>
                                <div className="text-xs text-green-500">
                                    {challenge.totalRemainingMoney}
                                </div>
                            </div>
                            <div>
                                <span>
                                    {challenge.progressDays} /{" "}
                                    {challenge.totalDays}
                                </span>
                            </div>
                        </li>
                    ))}

                    <NavigateButtonButton
                        path={"/dashboard/add"}
                        text="추가하기"
                    />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-3.5">
                    최근 소비에 대한 통계에요.
                </h2>
            </div>
        </div>
    );
}
