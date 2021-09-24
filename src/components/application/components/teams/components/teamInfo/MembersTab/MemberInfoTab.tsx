import React from 'react'
import MemberInfo from 'components/application/components/teams/components/teamInfo/MembersTab/MemberInfo'

    
const MemberInfoTab =(props: any)=>{
    return(
        <>
        <div className="member-info-tab">
        {
            props.team.members.map((member :any,index:number)=>{
                return(
                   <MemberInfo member={member} viewDeleteMember={props.viewDeleteMember} viewMakeAdmin={props.viewMakeAdmin}/>
                );
            })}
            <button className="text-style--bold text-color--green member-info-tab__addFile" onClick={props.viewInviteMember} >
                     Invite Members <span className="text-style--bold text-color--green member-info-tab__addFile__icon">+ </span>
            </button>
        </div>
        </>
    )
}
export default MemberInfoTab;