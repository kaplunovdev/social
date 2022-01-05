import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import style from "./Users.module.css";

let Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}

            />
            <div>
                {users.map(user =>
                    <User
                        user={user}
                        toggleFollowingProgress={props.toggleFollowingProgress}
                        followingInProgress={props.followingInProgress}
                        unFollow={props.unFollow}
                        follow={props.follow}

                    />
                )}
            </div>

            <div className={style.showMore}>
                <button>Show more</button>
            </div>
        </div>
    )

}

export default Users;