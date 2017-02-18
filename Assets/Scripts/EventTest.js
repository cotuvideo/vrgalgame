#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnPointerEnter()
{
	Debug.Log("enter");
	Global.anim.SetBool ("Next", true);
}

function OnPointerExit()
{
	Debug.Log("exit");
}
