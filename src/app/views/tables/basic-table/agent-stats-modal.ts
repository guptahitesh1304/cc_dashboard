export interface AgentStatsModel{
   agents:Array<Agents>;
   qid:string;

}
export interface Agents{

   agent:string;
   calls:number;
   missed:number;
   ivr:number;
   ring:number;
   talk:number;
   hold:number;
   idle:IDLE;
}
export interface IDLE{
   duration:number;
}

// "agent":"203",
// "calls":2,
// "missed":0,
// "ivr":224,
// "ring":15,
// "talk":855,
// "hold":487,