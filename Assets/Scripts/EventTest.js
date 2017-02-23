#pragma strict

public var sound00: AudioClip;
public var sound01: AudioClip;
public var cnt : int = 0;

function Start () {
	
}

function Update () {
	
}

function OnPointerEnter()
{
	Debug.Log("enter");
	Global.anim.SetBool ("Next", true);
	if(++cnt%2 == 1)
	{
		GetComponent.<AudioSource>().PlayOneShot(sound00);
	}
	else
	{
		GetComponent.<AudioSource>().PlayOneShot(sound01);
	}
}

function OnPointerExit()
{
	Debug.Log("exit");
}
