import { useSelector } from "react-redux"
import userImg from '../assets/user.png'

const Profile = () => {
    const { user } = useSelector(store => store.Auth)

    return (
        <div className="w-full h-full">
            <section className="w-full">
                <div className="lg:w-full md:w-[90%] sm:w-[96%] xs:w-[96%] flex flex-wrap gap-4 p-5">
                    <div className="lg:w-full md:w-[80%] sm:w-[88%] xs:w-full shadow-2xl p-4 rounded-xl h-fit self-center">
                        <div>
                            <form>

                                <div
                                    className="w-full sm:px-5 flex flex-col-reverse sm:flex-row justify-between rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center"
                                >
                                    <div className=" w-full sm:w-[30vw] flex flex-col justify-center items-center h-[141px] bg-white border border-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                                        <p className="text-2xl font-bold text-green-700">Green Points</p>
                                        <p className="text-xl text-white sm:text-black font-bold">{user?.GreenPoints}</p>
                                    </div>
                                    <img
                                        src={userImg}
                                        alt="userImg"
                                        className="h-[10%] hidden sm:block bg-white w-[10%] object-cover rounded-full"
                                    />
                                </div>


                                <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap gap-2 justify-center w-full">
                                    <div className="w-full mb-4 mt-6">
                                        <label className="mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="mt-2 p-4 w-full border-2 rounded-lg"
                                            value={user?.Name}
                                            disabled
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="w-full mb-4 lg:mt-6">
                                        <label className="mb-2">Username</label>
                                        <input
                                            type="text"
                                            className="mt-2 p-4 w-full border-2 rounded-lg"
                                            value={user?.Username || 'NA'}
                                            disabled
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap gap-2 justify-center w-full">
                                    <div className="w-full mb-4">
                                        <label className="mb-2">Email</label>
                                        <input
                                            type="text"
                                            className="mt-2 p-4 w-full border-2 rounded-lg"
                                            value={user?.Email}
                                            disabled
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="w-full mb-4">
                                        <label className="mb-2">Role</label>
                                        <input
                                            type="text"
                                            className="mt-2 p-4 w-full border-2 rounded-lg"
                                            value={user?.Role}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Profile